/**
 * Load Balancing API
 * API for the Load Balancing service. Use this API to manage load balancers, backend sets, and related items. For more
information, see [Overview of Load Balancing](/iaas/Content/Balance/Concepts/balanceoverview.htm).

 * OpenAPI spec version: 20170115
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
 * The load balancer's SSL handling configuration details.
 * <p>
 **Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.
 *
 */
export interface SSLConfigurationDetails {
  /**
    * A friendly name for the certificate bundle. It must be unique and it cannot be changed.
* Valid certificate bundle names include only alphanumeric characters, dashes, and underscores.
* Certificate bundle names cannot contain spaces. Avoid entering confidential information.
* <p>
Example: `example_certificate_bundle`
* 
    */
  "certificateName": string;
  /**
    * Whether the load balancer listener should verify peer certificates.
* <p>
Example: `true`
* 
    */
  "verifyPeerCertificate"?: boolean;
  /**
    * The maximum depth for peer certificate chain verification.
* <p>
Example: `3`
* 
    */
  "verifyDepth"?: number;
}

export namespace SSLConfigurationDetails {
  export function getJsonObj(obj: SSLConfigurationDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
