import { pgTable, text, timestamp, uuid, jsonb } from 'drizzle-orm/pg-core';

export const bookingRequests = pgTable('booking_requests', {
  id: uuid('id').defaultRandom().primaryKey(),
  service: text('service').notNull(), // black-truck, concierge-care, lifestyle-management, combined
  firstName: text('first_name').notNull(),
  lastName: text('last_name').notNull(),
  email: text('email').notNull(),
  phone: text('phone'),
  preferredContact: text('preferred_contact'), // email, phone
  arrangementFor: text('arrangement_for'), // myself, family, guest, business, someone-else
  details: jsonb('details').default({}),
  additionalInfo: text('additional_info'),
  status: text('status').default('pending'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
