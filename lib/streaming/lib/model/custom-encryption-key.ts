/**
 * Streaming Service API
 * The API for the Streaming Service.
 * OpenAPI spec version: 20180418
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

/**
 * Custom Encryption Key which will be used for encryption by all the streams in the pool.
 */
export interface CustomEncryptionKey {
  /**
   * Custom Encryption Key (Master Key) ocid.
   */
  "kmsKeyId"?: string;
  /**
   * Life cycle State of the custom key
   */
  "keyState"?: CustomEncryptionKey.KeyState;
}

export namespace CustomEncryptionKey {
  export enum KeyState {
    ACTIVE = "ACTIVE",
    CREATING = "CREATING",
    DELETING = "DELETING",
    NONE = "NONE",
    FAILED = "FAILED",
    UPDATING = "UPDATING",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: CustomEncryptionKey): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
