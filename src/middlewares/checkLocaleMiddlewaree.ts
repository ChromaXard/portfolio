// middleware/withLogging.ts
import { NextFetchEvent, NextRequest } from "next/server";
import { MiddlewareFactory } from "./types";
export const withLogging: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    console.log(`Log some data here :"${request.nextUrl.locale}"`);
    console.log(`Log some data here :"${request.nextUrl.locale}"`);
    return next(request, _next);
  };
};
