import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  deletionRequests: defineTable({
    userId: v.string(),
    email: v.string(),
    reason: v.optional(v.string()),
    feedback: v.optional(v.string()),
    requestedAt: v.number(),
    status: v.union(
      v.literal('pending'),
      v.literal('processed'),
      v.literal('cancelled')
    ),
  }).index('by_user', ['userId']),
});
