import { z } from 'zod';

export const protocolSchema = z.enum(['http://', 'https://', 'mailto:', 'tel:']);

export type Protocol = z.infer<typeof protocolSchema>;
