/**
 *
 *
 * OpenAPI spec version: release
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

export interface RestoreVaultFromFileResponse {
  /**
   * For optimistic concurrency control. See `if-match`.
   */
  "etag": string;
  /**
   * The base64-encoded MD5 hash value of the request body, as computed
   * by the server.
   *
   */
  "opcContentMd5": string;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact Oracle about
   * a particular request, please provide the request ID.
   *
   */
  "opcRequestId": string;
  /**
   * Unique Oracle-assigned identifier for the work request, used to track the progress of the
   * restore operation.
   *
   */
  "opcWorkRequestId": string;
  /**
   * The returned model.Vault instance.
   */
  "vault": model.Vault;
}