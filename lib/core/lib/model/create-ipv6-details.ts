/**
 * Core Services API
 * API covering the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services. Use this API
to manage resources such as virtual cloud networks (VCNs), compute instances, and
block storage volumes.

 * OpenAPI spec version: 20160918
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

export interface CreateIpv6Details {
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable. Avoid
   * entering confidential information.
   *
   */
  "displayName"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * An IPv6 address of your choice. Must be an available IP address within
* the subnet's CIDR. If you don't specify a value, Oracle automatically
* assigns an IPv6 address from the subnet. The subnet is the one that
* contains the VNIC you specify in `vnicId`.
* <p>
Example: `2001:0db8:0123:1111:abcd:ef01:2345:6789`
* 
    */
  "ipAddress"?: string;
  /**
    * Whether the IPv6 can be used for internet communication. Allowed by default for an IPv6 in
* a public subnet. Never allowed for an IPv6 in a private subnet. If the value is `true`, the
* IPv6 uses its public IP address for internet communication.
* <p>
If `isInternetAccessAllowed` is set to `false`, the resulting `publicIpAddress` attribute
* for the Ipv6 is null.
* <p>
Example: `true`
* 
    */
  "isInternetAccessAllowed"?: boolean;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the VNIC to assign the IPv6 to. The
   * IPv6 will be in the VNIC's subnet.
   *
   */
  "vnicId": string;
}

export namespace CreateIpv6Details {
  export function getJsonObj(obj: CreateIpv6Details): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}