/**
 * Application Migration Service API
 * API for the Application Migration service. Use this API to migrate applications from Oracle Cloud Infrastructure - Classic to Oracle Cloud Infrastructure.

 * OpenAPI spec version: 20191031
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
 * Specifies the credentials to access the source ICS instance
 *
 */
export interface IcsDiscoveryDetails extends model.DiscoveryDetails {
  /**
   * The ICS instance admin user
   */
  "serviceInstanceUser": string;
  /**
   * The ICS instance admin password
   */
  "serviceInstancePassword": string;

  "type": string;
}

export namespace IcsDiscoveryDetails {
  export function getJsonObj(obj: IcsDiscoveryDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.DiscoveryDetails.getJsonObj(obj) as IcsDiscoveryDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "ICS";
}
