import { NextResponse } from "next/server";
import { db } from "@/db";
import { bookingRequests } from "@/db/schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      service,
      firstName,
      lastName,
      email,
      phone,
      preferredContact,
      arrangementFor,
      pickupDate,
      pickupTime,
      pickupLocation,
      destination,
      additionalStops,
      passengers,
      tripType,
      requestDetails,
      additionalInfo,
    } = body;

    if (!service || !firstName || !lastName || !email) {
      return NextResponse.json(
        { message: "Missing required fields: service, name, and email are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const details = {
      pickupDate: pickupDate || null,
      pickupTime: pickupTime || null,
      pickupLocation: pickupLocation || null,
      destination: destination || null,
      additionalStops: additionalStops || null,
      passengers: passengers || null,
      tripType: tripType || null,
      requestDetails: requestDetails || null,
      preferredContact: preferredContact || null,
    };

    const [booking] = await db
      .insert(bookingRequests)
      .values({
        service,
        firstName,
        lastName,
        email,
        phone: phone || null,
        preferredContact: preferredContact || null,
        arrangementFor: arrangementFor || null,
        details,
        additionalInfo: additionalInfo || null,
      })
      .returning();

    // Note: In production, you would send an email notification here
    // (e.g., via Resend, SendGrid, Postmark) when those services are configured.
    // For now, the booking is stored in the database.

    return NextResponse.json(
      {
        message: "Your request has been received.",
        bookingId: booking.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Booking submission error:", error);
    return NextResponse.json(
      { message: "We couldn't process your request. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}
