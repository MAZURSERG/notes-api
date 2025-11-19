import type { Request, Response, NextFunction } from "express";
import type { ZodTypeAny } from "zod";

function validateResource(schema: ZodTypeAny) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        params: req.params,
        query: req.query
      });
      next();
    } catch (err: any) {
      return res.status(400).json({
        message: "Validation error",
        errors: err.errors
      });
    }
  };
}

module.exports = { validateResource };
export {};
