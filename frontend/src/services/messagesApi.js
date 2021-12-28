import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const messagesApi = createApi({
  reducerPath: "messagesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
  }),
  tagTypes:["Message"],
  endpoints: (builder) => ({
    getMessages: builder.query({
      query: () => "posts",
      providesTags: ["Message"],
    }),
    getMessageById: builder.query({
      query: (id) => `posts/${id}`,
    }),
    addMessage: builder.mutation({
      query: (Message) => ({
        url: "posts",
        method: "POST",
        body: Message,
      }),
      invalidatesTags: ["Message"],

    }),
    updateMessage: builder.mutation({
      query: ({ _id, ...Message }) => ({
        url: `posts/${_id}`,
        method: "PUT",
        body: Message,
      }),
      invalidatesTags: ["Message"],
    }),
    deleteMessage: builder.mutation({
      query: (id) => ({
        url: `posts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Message"],
    }),
  }),
});
export const { useGetMessagesQuery, useGetMessageByIdQuery,useAddMessageMutation,useUpdateMessageMutation,
  useDeleteMessageMutation } = messagesApi;