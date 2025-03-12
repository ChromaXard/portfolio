import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { stackMiddlewares } from "./middlewares/stackMiddlewares";
import { MiddlewareFactory } from "./middlewares/types";

import { withLogging } from "./middlewares/checkLocaleMiddlewaree";
import { NextRequest, NextResponse } from "next/server";

const wrappedIntlMiddleware: MiddlewareFactory = (next) => (request) => {
    return createMiddleware(routing)(request);
};

export const redirectToDefaultLocale = (defaultLocale: string) => (next: any) => {
    return (req: NextRequest) => {
      const { pathname, origin } = req.nextUrl;
  
      // Ignorer les routes spéciales
      if (pathname.startsWith("/_next") || pathname.startsWith("/api") || pathname.startsWith("/favicon.ico")) {
        return
      }
  
      // Si l'URL est "/", rediriger vers la locale par défaut
      if (pathname === "/") {
        return NextResponse.redirect(`${origin}/${defaultLocale}`);
      }
  
      return next(req);
    };
  };

const middlewares = stackMiddlewares([redirectToDefaultLocale("fr"), withLogging, wrappedIntlMiddleware]);

export default middlewares;

export const config = {
  matcher: ["/", "/:locale/:path*"], // At this line, define into the matcher all the availables language you have defined into routing.ts
};