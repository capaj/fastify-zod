/* tslint:disable */
/* eslint-disable */
/**
 * Zod Fastify Test Server
 * API for Zod Fastify Test Server
 *
 * The version of the OpenAPI document: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface TodoItemId
 */
export interface TodoItemId {
    /**
     * 
     * @type {string}
     * @memberof TodoItemId
     */
    id: string;
}

export function TodoItemIdFromJSON(json: any): TodoItemId {
    return TodoItemIdFromJSONTyped(json, false);
}

export function TodoItemIdFromJSONTyped(json: any, ignoreDiscriminator: boolean): TodoItemId {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
    };
}

export function TodoItemIdToJSON(value?: TodoItemId | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
    };
}


