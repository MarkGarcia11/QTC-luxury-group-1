"use client";

import { useState, useRef, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "../ui/Button";

type ServiceType =
  | "black-truck"
  | "concierge-care"
  | "lifestyle-management"
  | "combined";

type FormData = {
  service: ServiceType | "";
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredContact: "email" | "phone" | "";
  arrangementFor:
    | "myself"
    | "family"
    | "guest"
    | "business"
    | "someone-else"
    | "";
  // Transport-specific
  pickupDate: string;
  pickupTime: string;
  pickupLocation: string;
  destination: string;
  additionalStops: string;
  passengers: string;
  tripType: "one-way" | "round-trip" | "hourly" | "full-day" | "wait" | "";
  // Other services
  requestDetails: string;
  additionalInfo: string;
};

const initialData: FormData = {
  service: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  preferredContact: "",
  arrangementFor: "",
  pickupDate: "",
  pickupTime: "",
  pickupLocation: "",
  destination: "",
  additionalStops: "",
  passengers: "",
  tripType: "",
  requestDetails: "",
  additionalInfo: "",
};

const serviceOptions: {
  id: ServiceType;
  title: string;
  description: string;
}[] = [
  {
    id: "black-truck",
    title: "Black Truck Service",
    description: "Premium chauffeur & SUV transportation",
  },
  {
    id: "concierge-care",
    title: "Concierge Care",
    description: "Personalized assistance & coordination",
  },
  {
    id: "lifestyle-management",
    title: "Lifestyle Management",
    description: "Ongoing arrangements & support",
  },
  {
    id: "combined",
    title: "Combined Services",
    description: "Transportation + concierge + lifestyle",
  },
];

const arrangedFor = [
  { id: "myself", label: "Myself" },
  { id: "family", label: "A Family Member" },
  { id: "guest", label: "A Guest" },
  { id: "business", label: "A Business / Organization" },
  { id: "someone-else", label: "Someone Else" },
];

const tripTypes = [
  { id: "one-way", label: "One-way trip" },
  { id: "round-trip", label: "Round trip" },
  { id: "wait", label: "Driver waiting" },
  { id: "hourly", label: "Hourly service" },
  { id: "full-day", label: "Full-day arrangement" },
];

export default function BookingForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(initialData);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const totalSteps = 6;
  const isTransport = data.service === "black-truck";
  const isOther =
    data.service === "concierge-care" ||
    data.service === "lifestyle-management" ||
    data.service === "combined";

  const update = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  const validateStep = (currentStep: number): boolean => {
    setError("");
    switch (currentStep) {
      case 0:
        if (!data.service) {
          setError("Please select a service to continue.");
          return false;
        }
        return true;
      case 1:
        if (!data.firstName.trim() || !data.lastName.trim() || !data.email.trim()) {
          setError("Please complete your name and email.");
          return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
          setError("Please enter a valid email address.");
          return false;
        }
        return true;
      case 2:
        if (!data.arrangementFor) {
          setError("Please let us know who this arrangement is for.");
          return false;
        }
        return true;
      case 3:
        if (isTransport) {
          if (!data.pickupLocation.trim() || !data.destination.trim()) {
            setError("Please provide pickup location and destination.");
            return false;
          }
        }
        return true;
      default:
        return true;
    }
  };

  const next = () => {
    if (!validateStep(step)) return;
    setStep((s) => Math.min(s + 1, totalSteps - 1));
  };
  const prev = () => {
    setError("");
    setStep((s) => Math.max(s - 1, 0));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (step < totalSteps - 1) {
      next();
      return;
    }
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || "Something went wrong");
      }
      setSubmitted(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Submission failed";
      setError(msg);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return <SuccessState data={data} />;
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="w-full">
      {/* Progress bar */}
      <div className="mb-14">
        <div className="flex items-center justify-between mb-3">
          <span className="font-accent text-[0.65rem] tracking-[0.28em] uppercase text-taupe">
            Step {step + 1} of {totalSteps}
          </span>
          <span className="font-accent text-[0.65rem] tracking-[0.28em] uppercase text-bronze">
            {
              [
                "Select Service",
                "Your Information",
                "Arrangement For",
                "Details",
                "Additional Notes",
                "Review",
              ][step]
            }
          </span>
        </div>
        <div className="h-px bg-stone/60 w-full overflow-hidden">
          <motion.div
            className="h-full bg-bronze"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: (step + 1) / totalSteps }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ originX: 0 }}
          />
        </div>
      </div>

      {/* Error */}
      <AnimatePresence mode="wait">
        {error && (
          <motion.div
            key="error"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mb-8 p-4 bg-red-50 border border-red-200 text-red-800 text-sm"
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Step content */}
      <div className="min-h-[360px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {step === 0 && (
              <StepService data={data} update={update} />
            )}
            {step === 1 && <StepContact data={data} update={update} />}
            {step === 2 && <StepFor data={data} update={update} />}
            {step === 3 && (
              <StepDetails
                data={data}
                update={update}
                isTransport={isTransport}
                isOther={isOther}
              />
            )}
            {step === 4 && <StepAdditional data={data} update={update} />}
            {step === 5 && <StepReview data={data} />}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation buttons */}
      <div className="mt-14 pt-8 border-t border-stone/50 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={prev}
          disabled={step === 0}
          className={cn(
            "group inline-flex items-center gap-2 font-accent text-[0.72rem] tracking-[0.2em] uppercase text-espresso/70 hover:text-espresso transition-colors duration-300",
            step === 0 && "opacity-0 pointer-events-none"
          )}
        >
          <ArrowLeft size={14} strokeWidth={1.5} className="transition-transform group-hover:-translate-x-1" />
          Back
        </button>

        {step < totalSteps - 1 ? (
          <button
            type="button"
            onClick={next}
            className="group inline-flex items-center gap-3 bg-champagne text-espresso px-8 py-3.5 text-[0.75rem] tracking-[0.2em] uppercase font-medium hover:bg-bronze hover:text-white transition-all duration-500"
          >
            Continue
            <ArrowRight size={15} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
          </button>
        ) : (
          <Button
            type="submit"
            size="lg"
            disabled={submitting}
            arrow={false}
            className={cn(submitting && "opacity-70")}
          >
            {submitting ? (
              <>
                <Loader2 size={15} className="animate-spin mr-2" />
                Submitting...
              </>
            ) : (
              "Submit My Request"
            )}
          </Button>
        )}
      </div>
    </form>
  );
}

function StepService({
  data,
  update,
}: {
  data: FormData;
  update: <K extends keyof FormData>(key: K, value: FormData[K]) => void;
}) {
  return (
    <div>
      <h3 className="font-serif text-3xl md:text-4xl font-light text-espresso mb-3">
        Which experience are you interested in?
      </h3>
      <p className="text-espresso/60 text-sm leading-relaxed mb-10 max-w-lg">
        Select a service to begin. You can combine services or add details later.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {serviceOptions.map((opt) => (
          <button
            key={opt.id}
            type="button"
            onClick={() => update("service", opt.id)}
            className={cn(
              "service-tile text-left p-7 bg-ivory/50 group transition-all duration-500",
              data.service === opt.id && "selected"
            )}
          >
            <div className="flex items-start justify-between mb-3">
              <span className="font-serif text-xl text-espresso">
                {opt.title}
              </span>
              <div
                className={cn(
                  "w-5 h-5 rounded-full border-2 border-taupe flex items-center justify-center transition-all duration-300",
                  data.service === opt.id
                    ? "border-bronze bg-bronze"
                    : ""
                )}
              >
                {data.service === opt.id && (
                  <Check size={12} className="text-white" strokeWidth={3} />
                )}
              </div>
            </div>
            <p className="text-espresso/60 text-[0.85rem] font-light">
              {opt.description}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}

function StepContact({
  data,
  update,
}: {
  data: FormData;
  update: <K extends keyof FormData>(key: K, value: FormData[K]) => void;
}) {
  return (
    <div>
      <h3 className="font-serif text-3xl md:text-4xl font-light text-espresso mb-3">
        Your information
      </h3>
      <p className="text-espresso/60 text-sm leading-relaxed mb-10 max-w-lg">
        So we can reach you regarding your arrangements.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
        <div>
          <label className="form-label">First Name</label>
          <input
            type="text"
            value={data.firstName}
            onChange={(e) => update("firstName", e.target.value)}
            className="form-input"
            placeholder="Jane"
            required
          />
        </div>
        <div>
          <label className="form-label">Last Name</label>
          <input
            type="text"
            value={data.lastName}
            onChange={(e) => update("lastName", e.target.value)}
            className="form-input"
            placeholder="Doe"
            required
          />
        </div>
        <div>
          <label className="form-label">Email Address</label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => update("email", e.target.value)}
            className="form-input"
            placeholder="jane@example.com"
            required
          />
        </div>
        <div>
          <label className="form-label">Phone Number (optional)</label>
          <input
            type="tel"
            value={data.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="form-input"
            placeholder="(555) 123-4567"
          />
        </div>
        <div className="md:col-span-2">
          <label className="form-label">Preferred Contact Method</label>
          <div className="flex gap-6 mt-2">
            {(["email", "phone"] as const).map((m) => (
              <label
                key={m}
                className="flex items-center gap-2 cursor-pointer group"
              >
                <span
                  className={cn(
                    "w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all duration-300",
                    data.preferredContact === m
                      ? "border-bronze"
                      : "border-taupe group-hover:border-bronze/60"
                  )}
                >
                  {data.preferredContact === m && (
                    <span className="w-1.5 h-1.5 rounded-full bg-bronze" />
                  )}
                </span>
                <span className="text-sm text-espresso/80 capitalize font-light">
                  {m}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StepFor({
  data,
  update,
}: {
  data: FormData;
  update: <K extends keyof FormData>(key: K, value: FormData[K]) => void;
}) {
  return (
    <div>
      <h3 className="font-serif text-3xl md:text-4xl font-light text-espresso mb-3">
        Who is this arrangement for?
      </h3>
      <p className="text-espresso/60 text-sm leading-relaxed mb-10 max-w-lg">
        You may be arranging this for yourself or someone else — both are
        perfectly common.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {arrangedFor.map((opt) => (
          <button
            key={opt.id}
            type="button"
            onClick={() => update("arrangementFor", opt.id as FormData["arrangementFor"])}
            className={cn(
              "service-tile text-left p-5 bg-ivory/50 transition-all duration-500",
              data.arrangementFor === opt.id && "selected"
            )}
          >
            <span className="font-serif text-base text-espresso font-light">
              {opt.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

function StepDetails({
  data,
  update,
  isTransport,
  isOther,
}: {
  data: FormData;
  update: <K extends keyof FormData>(key: K, value: FormData[K]) => void;
  isTransport: boolean;
  isOther: boolean;
}) {
  return (
    <div>
      <h3 className="font-serif text-3xl md:text-4xl font-light text-espresso mb-3">
        Tell us about your arrangements
      </h3>
      <p className="text-espresso/60 text-sm leading-relaxed mb-10 max-w-lg">
        Share what you have in mind. We&apos;ll review and follow up to confirm
        details.
      </p>

      {isTransport && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
            <div>
              <label className="form-label">Pickup Date</label>
              <input
                type="date"
                value={data.pickupDate}
                onChange={(e) => update("pickupDate", e.target.value)}
                className="form-input"
              />
            </div>
            <div>
              <label className="form-label">Pickup Time</label>
              <input
                type="time"
                value={data.pickupTime}
                onChange={(e) => update("pickupTime", e.target.value)}
                className="form-input"
              />
            </div>
            <div className="md:col-span-2">
              <label className="form-label">Pickup Location</label>
              <input
                type="text"
                value={data.pickupLocation}
                onChange={(e) => update("pickupLocation", e.target.value)}
                className="form-input"
                placeholder="Hotel, address, or airport"
              />
            </div>
            <div className="md:col-span-2">
              <label className="form-label">Destination</label>
              <input
                type="text"
                value={data.destination}
                onChange={(e) => update("destination", e.target.value)}
                className="form-input"
                placeholder="Where are you heading?"
              />
            </div>
            <div>
              <label className="form-label">Number of Passengers</label>
              <input
                type="number"
                min={1}
                value={data.passengers}
                onChange={(e) => update("passengers", e.target.value)}
                className="form-input"
                placeholder="2"
              />
            </div>
            <div>
              <label className="form-label">Additional Stops (optional)</label>
              <input
                type="text"
                value={data.additionalStops}
                onChange={(e) => update("additionalStops", e.target.value)}
                className="form-input"
                placeholder="Any stops along the way?"
              />
            </div>
          </div>

          <div>
            <label className="form-label">Trip Type</label>
            <div className="flex flex-wrap gap-3 mt-3">
              {tripTypes.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => update("tripType", t.id as FormData["tripType"])}
                  className={cn(
                    "px-5 py-2.5 border text-[0.78rem] tracking-wide transition-all duration-400",
                    data.tripType === t.id
                      ? "border-bronze bg-bronze/10 text-espresso"
                      : "border-stone text-espresso/65 hover:border-bronze/60"
                  )}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {isOther && (
        <div>
          <label className="form-label">
            What are you looking to arrange?
          </label>
          <textarea
            rows={5}
            value={data.requestDetails}
            onChange={(e) => update("requestDetails", e.target.value)}
            className="form-input resize-none"
            placeholder="Tell us about the type of assistance, arrangements, or experience you have in mind. Include dates, locations, or details if you know them."
          />
        </div>
      )}
    </div>
  );
}

function StepAdditional({
  data,
  update,
}: {
  data: FormData;
  update: <K extends keyof FormData>(key: K, value: FormData[K]) => void;
}) {
  return (
    <div>
      <h3 className="font-serif text-3xl md:text-4xl font-light text-espresso mb-3">
        Any additional details?
      </h3>
      <p className="text-espresso/60 text-sm leading-relaxed mb-10 max-w-lg">
        Special requests, event details, preferred arrangements, or anything
        else we should know.
      </p>
      <div>
        <label className="form-label">Additional Notes</label>
        <textarea
          rows={7}
          value={data.additionalInfo}
          onChange={(e) => update("additionalInfo", e.target.value)}
          className="form-input resize-none"
          placeholder="Special requests, occasion details, accessibility needs, vehicle preferences, timing considerations, or anything else you'd like us to know."
        />
      </div>
    </div>
  );
}

function StepReview({ data }: { data: FormData }) {
  const getLabel = (val: string, options: { id: string; label: string }[]) =>
    options.find((o) => o.id === val)?.label || val;

  const serviceLabel = serviceOptions.find((s) => s.id === data.service)?.title;
  const forLabel = arrangedFor.find((f) => f.id === data.arrangementFor)?.label;
  const tripLabel = tripTypes.find((t) => t.id === data.tripType)?.label;

  const reviewItems: [string, string | undefined][] = [
    ["Service", serviceLabel],
    ["Name", `${data.firstName} ${data.lastName}`.trim()],
    ["Email", data.email],
    ["Phone", data.phone || "—"],
    ["Preferred Contact", data.preferredContact || "—"],
    ["Arrangement For", forLabel],
  ];

  const transportItems: [string, string | undefined][] = [
    ["Pickup Date", data.pickupDate || "—"],
    ["Pickup Time", data.pickupTime || "—"],
    ["Pickup Location", data.pickupLocation || "—"],
    ["Destination", data.destination || "—"],
    ["Passengers", data.passengers || "—"],
    ["Additional Stops", data.additionalStops || "—"],
    ["Trip Type", tripLabel || "—"],
  ];

  return (
    <div>
      <h3 className="font-serif text-3xl md:text-4xl font-light text-espresso mb-3">
        Review your request
      </h3>
      <p className="text-espresso/60 text-sm leading-relaxed mb-10 max-w-lg">
        Please confirm everything looks correct before submitting. This is a
        request only — our team will follow up to confirm availability.
      </p>
      <div className="space-y-7">
        <div>
          <h4 className="font-accent text-[0.65rem] tracking-[0.24em] uppercase text-bronze mb-4">
            Contact & Service
          </h4>
          <dl className="divide-y divide-stone/40 border-t border-stone/40">
            {reviewItems.map(([label, val]) => (
              <div key={label} className="flex justify-between py-3">
                <dt className="text-espresso/60 text-sm font-light">{label}</dt>
                <dd className="text-espresso text-sm font-medium">{val}</dd>
              </div>
            ))}
          </dl>
        </div>

        {data.service === "black-truck" && (
          <div>
            <h4 className="font-accent text-[0.65rem] tracking-[0.24em] uppercase text-bronze mb-4">
              Transportation Details
            </h4>
            <dl className="divide-y divide-stone/40 border-t border-stone/40">
              {transportItems.map(([label, val]) => (
                <div key={label} className="flex justify-between py-3">
                  <dt className="text-espresso/60 text-sm font-light">{label}</dt>
                  <dd className="text-espresso text-sm text-right">{val}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}

        {data.requestDetails && (
          <div>
            <h4 className="font-accent text-[0.65rem] tracking-[0.24em] uppercase text-bronze mb-3">
              Arrangement Details
            </h4>
            <p className="text-espresso/80 text-sm leading-relaxed bg-sand/30 p-5 border-l-2 border-bronze">
              {data.requestDetails}
            </p>
          </div>
        )}

        {data.additionalInfo && (
          <div>
            <h4 className="font-accent text-[0.65rem] tracking-[0.24em] uppercase text-bronze mb-3">
              Additional Notes
            </h4>
            <p className="text-espresso/80 text-sm leading-relaxed bg-sand/30 p-5 border-l-2 border-bronze">
              {data.additionalInfo}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function SuccessState({ data }: { data: FormData }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="text-center py-10"
    >
      <div className="w-16 h-16 rounded-full bg-champagne/30 flex items-center justify-center mx-auto mb-8">
        <Check size={28} className="text-bronze" strokeWidth={1.5} />
      </div>
      <h3 className="font-serif text-3xl md:text-4xl font-light text-espresso mb-5">
        Thank you, {data.firstName}.
      </h3>
      <p className="text-espresso/70 text-[0.95rem] leading-[1.9] font-light max-w-xl mx-auto mb-6">
        Thank you for considering QTC Luxury Group. Your request has been
        received. Our team will review your arrangements and contact you
        regarding availability and the next steps.
      </p>
      <p className="text-espresso/50 text-xs tracking-wide max-w-md mx-auto">
        A confirmation email has been sent to <strong>{data.email}</strong>.
        This is a request only and does not guarantee availability until
        confirmed by our team.
      </p>
    </motion.div>
  );
}
