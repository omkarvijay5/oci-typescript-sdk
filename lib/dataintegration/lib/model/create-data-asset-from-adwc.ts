/**
 * Data Integration API
 * Use the Data Integration Service APIs to perform common extract, load, and transform (ETL) tasks.
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * The ADWC data asset details.
 */
export interface CreateDataAssetFromAdwc extends model.CreateDataAssetDetails {
  /**
   * The service name for the data asset.
   */
  "serviceName"?: string;
  /**
   * The driver class for the data asset.
   */
  "driverClass"?: string;
  /**
   * The credential file content from a wallet for the data asset.
   */
  "credentialFileContent"?: string;
  "defaultConnection"?: model.CreateConnectionFromAdwc;

  "modelType": string;
}

export namespace CreateDataAssetFromAdwc {
  export function getJsonObj(obj: CreateDataAssetFromAdwc, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateDataAssetDetails.getJsonObj(obj) as CreateDataAssetFromAdwc)),
      ...{
        "defaultConnection": obj.defaultConnection
          ? model.CreateConnectionFromAdwc.getJsonObj(obj.defaultConnection)
          : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "ORACLE_ADWC_DATA_ASSET";
}
