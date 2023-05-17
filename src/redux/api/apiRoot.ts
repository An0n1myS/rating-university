import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../baseQuery/baseQuery";


export const rootService = createApi({
	reducerPath: "",
	baseQuery: axiosBaseQuery(),
	endpoints: (builder) => ({
		getStudentsData: builder.query<any, void>({
			query: () => ({
				url: "/students",
				method: "GET"
			})
		}),
		getTeachersData: builder.query<any, void>({
			query: () => ({
				url: "/teachers",
				method: "GET"
			})
		}),
		getRankingForGroupData: builder.query<any, void>({
			query: () => ({
				url: "/ranking_for_group",
				method: "GET"
			})
		}),
		getRankingData: builder.query<any, void>({
			query: () => ({
				url: "/ranking",
				method: "GET"
			})
		}),
		getAddStudentsData: builder.query<any, void>({
			query: () => ({
				url: "/students/add",
				method: "GET"
			})
		}),
		postFormAddStudentData: builder.mutation<void, any>({
			query: (form) => ({
				url: "/students/add_form",
				method: "POST",
				data: form
			})
		})
	})
})

export const {
	getAddStudentsData,
	getRankingData,
	getRankingForGroupData,
	getStudentsData,
	getTeachersData,
	postFormAddStudentData
} = rootService.endpoints

export const {
	useGetAddStudentsDataQuery,
	useGetRankingDataQuery,
	useGetRankingForGroupDataQuery,
	useGetStudentsDataQuery,
	useGetTeachersDataQuery,
	usePostFormAddStudentDataMutation
} = rootService
