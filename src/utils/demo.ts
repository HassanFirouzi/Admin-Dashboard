// True only on the live production deployment (see next.config.ts) — this
// portfolio demo is public, so create/update/delete are disabled there to
// keep the shared mock data from being changed by visitors. Preview
// deployments and local `next dev` are unaffected.
export const isDemoReadOnly = process.env.NEXT_PUBLIC_DEMO_READONLY === "true";

export const DEMO_READONLY_MESSAGE = "demoda bu işlem devre dışı bırakıldı.";
