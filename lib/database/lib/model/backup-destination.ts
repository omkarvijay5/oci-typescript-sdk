/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
 * Backup destination details.
 */
export interface BackupDestination {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the backup destination.
   */
  "id"?: string;
  /**
   * The user-provided name of the backup destination.
   */
  "displayName"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId"?: string;
  /**
   * Type of the backup destination.
   */
  "type"?: BackupDestination.Type;
  /**
   * List of databases associated with the backup destination.
   */
  "associatedDatabases"?: Array<model.AssociatedDatabaseDetails>;
  /**
   * For a RECOVERY_APPLIANCE backup destination, the connection string for connecting to the Recovery Appliance.
   */
  "connectionString"?: string;
  /**
   * For a RECOVERY_APPLIANCE backup destination, the Virtual Private Catalog (VPC) users that are used to access the Recovery Appliance.
   */
  "vpcUsers"?: Array<string>;
  /**
   * The local directory path on each VM cluster node where the NFS server location is mounted. The local directory path and the NFS server location must each be the same across all of the VM cluster nodes. Ensure that the NFS mount is maintained continuously on all of the VM cluster nodes.
   *
   */
  "localMountPointPath"?: string;
  /**
   * The current lifecycle state of the backup destination.
   */
  "lifecycleState"?: BackupDestination.LifecycleState;
  /**
   * The date and time the backup destination was created.
   */
  "timeCreated"?: Date;
  /**
   * A descriptive text associated with the lifecycleState.
   * Typically contains additional displayable text
   *
   */
  "lifecycleDetails"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace BackupDestination {
  export enum Type {
    NFS = "NFS",
    RECOVERYAPPLIANCE = "RECOVERY_APPLIANCE",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export enum LifecycleState {
    ACTIVE = "ACTIVE",
    FAILED = "FAILED",
    DELETED = "DELETED",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: BackupDestination): object {
    const jsonObj = {
      ...obj,
      ...{
        "associatedDatabases": obj.associatedDatabases
          ? obj.associatedDatabases.map(item => {
              return model.AssociatedDatabaseDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}