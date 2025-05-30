/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Connection type
 */
export const ConnectionInfoType = {
  Http: "http",
  Stdio: "stdio",
} as const;
/**
 * Connection type
 */
export type ConnectionInfoType = ClosedEnum<typeof ConnectionInfoType>;

export type ConnectionInfo = {
  /**
   * Connection type
   */
  type: ConnectionInfoType;
  /**
   * HTTP URL to connect to (for http type)
   */
  deploymentUrl?: string | undefined;
  /**
   * JSON Schema defining required configuration options
   */
  configSchema: { [k: string]: any };
  /**
   * True if the server is published on `npm`, `pypi`, or `uv` and runnable without users needing to clone the source code (for stdio type).
   */
  published?: boolean | undefined;
  /**
   * A lambda Javascript function that takes in the config object and returns a StdioConnection object (for stdio type).
   */
  stdioFunction?: string | undefined;
};

/** @internal */
export const ConnectionInfoType$inboundSchema: z.ZodNativeEnum<
  typeof ConnectionInfoType
> = z.nativeEnum(ConnectionInfoType);

/** @internal */
export const ConnectionInfoType$outboundSchema: z.ZodNativeEnum<
  typeof ConnectionInfoType
> = ConnectionInfoType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConnectionInfoType$ {
  /** @deprecated use `ConnectionInfoType$inboundSchema` instead. */
  export const inboundSchema = ConnectionInfoType$inboundSchema;
  /** @deprecated use `ConnectionInfoType$outboundSchema` instead. */
  export const outboundSchema = ConnectionInfoType$outboundSchema;
}

/** @internal */
export const ConnectionInfo$inboundSchema: z.ZodType<
  ConnectionInfo,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: ConnectionInfoType$inboundSchema,
  deploymentUrl: z.string().optional(),
  configSchema: z.record(z.any()),
  published: z.boolean().optional(),
  stdioFunction: z.string().optional(),
});

/** @internal */
export type ConnectionInfo$Outbound = {
  type: string;
  deploymentUrl?: string | undefined;
  configSchema: { [k: string]: any };
  published?: boolean | undefined;
  stdioFunction?: string | undefined;
};

/** @internal */
export const ConnectionInfo$outboundSchema: z.ZodType<
  ConnectionInfo$Outbound,
  z.ZodTypeDef,
  ConnectionInfo
> = z.object({
  type: ConnectionInfoType$outboundSchema,
  deploymentUrl: z.string().optional(),
  configSchema: z.record(z.any()),
  published: z.boolean().optional(),
  stdioFunction: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConnectionInfo$ {
  /** @deprecated use `ConnectionInfo$inboundSchema` instead. */
  export const inboundSchema = ConnectionInfo$inboundSchema;
  /** @deprecated use `ConnectionInfo$outboundSchema` instead. */
  export const outboundSchema = ConnectionInfo$outboundSchema;
  /** @deprecated use `ConnectionInfo$Outbound` instead. */
  export type Outbound = ConnectionInfo$Outbound;
}

export function connectionInfoToJSON(connectionInfo: ConnectionInfo): string {
  return JSON.stringify(ConnectionInfo$outboundSchema.parse(connectionInfo));
}

export function connectionInfoFromJSON(
  jsonString: string,
): SafeParseResult<ConnectionInfo, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ConnectionInfo$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ConnectionInfo' from JSON`,
  );
}
