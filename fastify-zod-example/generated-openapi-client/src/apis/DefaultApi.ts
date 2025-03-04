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


import * as runtime from '../runtime';
import {
    TodoItem,
    TodoItemFromJSON,
    TodoItemToJSON,
    TodoItems,
    TodoItemsFromJSON,
    TodoItemsToJSON,
} from '../models';

export interface PostTodoItemRequest {
    todoItem?: TodoItem;
}

export interface PutTodoItemRequest {
    id: string;
    todoItem?: TodoItem;
}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     */
    async getTodoItemsRaw(): Promise<runtime.ApiResponse<TodoItems>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/item`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TodoItemsFromJSON(jsonValue));
    }

    /**
     */
    async getTodoItems(): Promise<TodoItems> {
        const response = await this.getTodoItemsRaw();
        return await response.value();
    }

    /**
     */
    async postTodoItemRaw(requestParameters: PostTodoItemRequest): Promise<runtime.ApiResponse<TodoItems>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/item`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TodoItemToJSON(requestParameters.todoItem),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TodoItemsFromJSON(jsonValue));
    }

    /**
     */
    async postTodoItem(requestParameters: PostTodoItemRequest): Promise<TodoItems> {
        const response = await this.postTodoItemRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async putTodoItemRaw(requestParameters: PutTodoItemRequest): Promise<runtime.ApiResponse<TodoItem>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling putTodoItem.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/item/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: TodoItemToJSON(requestParameters.todoItem),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TodoItemFromJSON(jsonValue));
    }

    /**
     */
    async putTodoItem(requestParameters: PutTodoItemRequest): Promise<TodoItem> {
        const response = await this.putTodoItemRaw(requestParameters);
        return await response.value();
    }

}
