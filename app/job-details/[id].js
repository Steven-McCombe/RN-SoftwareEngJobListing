import {Text, View, SafeAreaView, ActivityIndicator, RefreshControl, ScrollView} from 'react-native'
import { useCallback , useState } from 'react'
import { Stack, useRouter, useGlobalSearchParams, } from 'expo-router';

import {Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics} from '../../components'
import { COLORS, icons, SIZES} from '../../constants'
import useFetch from '../../hook/useFetch';


const jobDetails = () => {
    const params = useGlobalSearchParams();
    const router = useRouter();

    const {data, isLoading, error, refetch} = useFetch('job-details', {
        job_id: params.id
    })

    const [refreshing, setRefreshing] = useState(false)

    const onRefresh = () => {}

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightwhite}}>
        <Stack.Screen
        options={{
            headerStyle: {backgroundColor: COLORS.lightWhite},
            headerShadowVisible: false,
            headerBackVisible: false,
            headerLeft: () => (
                <ScreenHeaderBtn
                iconUrl={icons.left}
                dimension="60%"
                handlePress={() => router.back()}

                />
            ),
            headerRight: () => (
                <ScreenHeaderBtn
                iconUrl={icons.share}
                dimension="60%"

                />
            ),
            headerTitle: ''
        }}
    />
    <>
    <ScrollView showsVerticalScrollIndicator={false} refreshControl={<refreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
        {isLoading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
            <Text>Something went Wrong</Text>
        ) : data.length === 0 ? (
            <Text>No data</Text>
        ) : (
            <View style= {{padding: SIZES.medium, paddingBottom: 100}}>
                <Company
                
                />

                <JobTabs
                
                />
            </View>
        
        )}
    </ScrollView>
    </>
    </SafeAreaView>
  )
}

export default jobDetails