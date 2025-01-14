import { v4 as uuidv4 } from 'uuid';

export default function generateUuid(): string {
  return uuidv4();
}
