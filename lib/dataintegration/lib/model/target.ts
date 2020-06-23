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
 * The information about the target operator. The target operator lets you specify the data entity to store the transformed data.
 */
export interface Target extends model.Operator {
  "entity"?: model.DataEntityFromTable | model.DataEntityFromView | model.DataEntityFromFile;
  /**
   * Specifies the read access.
   */
  "isReadAccess"?: boolean;
  /**
   * Specifies the copy fields.
   */
  "isCopyFields"?: boolean;
  /**
   * Specifies if this uses a predefined shape.
   */
  "isPredefinedShape"?: boolean;
  /**
   * Specifies the data property.
   */
  "dataProperty"?: Target.DataProperty;
  "writeOperationConfig"?: model.WriteOperationConfig;

  "modelType": string;
}

export namespace Target {
  export enum DataProperty {
    TRUNCATE = "TRUNCATE",
    MERGE = "MERGE",
    BACKUP = "BACKUP",
    OVERWRITE = "OVERWRITE",
    APPEND = "APPEND",
    IGNORE = "IGNORE",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Target, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Operator.getJsonObj(obj) as Target)),
      ...{
        "entity": obj.entity ? model.DataEntity.getJsonObj(obj.entity) : undefined,

        "writeOperationConfig": obj.writeOperationConfig
          ? model.WriteOperationConfig.getJsonObj(obj.writeOperationConfig)
          : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "TARGET_OPERATOR";
}