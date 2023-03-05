import type { Session } from 'koa-session';

export interface Context {
  session: Session
}
