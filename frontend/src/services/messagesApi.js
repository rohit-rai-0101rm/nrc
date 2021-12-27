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
        url: "messages",
        method: "POST",
        body: Message,
      }),
      invalidatesTags: ["Message"],

    }),
    updateMessage: builder.mutation({
      query: ({ id, ...Message }) => ({
        url: `messages/${id}`,
        method: "PUT",
        body: Message,
      }),
      invalidatesTags: ["Message"],
    }),
    deleteMessage: builder.mutation({
      query: (id) => ({
        url: `messages/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Message"],
    }),
  }),
});
export const { useGetMessagesQuery, useGetMessageByIdQuery,useAddMessageMutation,useUpdateMessageMutation,
  useDeleteMessageMutation } = messagesApi;