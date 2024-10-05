

import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook
import ArrowSvg from '../assets/svgs/arrow.svg';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';


const { width, height } = Dimensions.get('window');

const ScrollableDashboard = () => {
    const navigation = useNavigation(); // Hook to access navigation
    const route = useRoute();

    const [tlAssignedCases, setTlAssignedCases] = useState(0);
    const [followUpCases, setFollowUpCases] = useState(0);
    const [declinedCases, setDeclinedCases] = useState(0);
    const [ptpCases, setPtpCases] = useState(0);
    const [fullyPaidCases, setFullyPaidCases] = useState(0);
    const [partialPaidCases, setPartialPaidCases] = useState(0);
    const [notContactableCases, setNotContactableCases] = useState(0);
    const [revisitsCases, setRevisitsCases] = useState(0);
    const [notVisitedCases, setNotVisitedCases] = useState(0);
    const [othersCases, setOthersCases] = useState(0);








    const [caseData, setCaseData] = useState({
        "TL Assigned Cases": 0,
        "Follow-up Cases": 0,
        "Declined": 0,
        "PTP": 0,
        "Fully Paid Cases": 0,
        "Partially Paid Cases": 0,
        "Not Contactable": 0,
        "Revisits": 0,
        "Not Visited": 0,
        "Others": 0
    })

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await axios.get('API_URL')
                setCaseData(response.data)
            }catch(error) {
                console.error('Error Fetching Case Data:', error)
            }
        };
        loadData(); 
    }, [])



    // Below useEffect I use to get the cases number from the cases Present inside the 
    // TL assigned Cases count
    useEffect(() => {
        if (route.params?.tlAssignedCasesCount) {
            setTlAssignedCases(route.params.tlAssignedCasesCount);
            setCaseData(prevData => ({
                ...prevData,
                "TL Assigned Cases": route.params.tlAssignedCasesCount
            }));
        }
    }, [route.params?.tlAssignedCasesCount]);

    // Follow up case count
    useEffect(() => {
        if (route.params?.followUpCasesCount) {
            setTlAssignedCases(route.params.followUpCasesCount);
            setCaseData(prevData => ({
                ...prevData,
                "Follow-up Cases": route.params.followUpCasesCount
            }));
        }
    }, [route.params?.followUpCasesCount]);

    // Declined Cases count
    useEffect(() => {
        if (route.params?.declinedCasesCount) {
            setDeclinedCases(route.params.declinedCasesCount);
            setCaseData(prevData => ({
                ...prevData,
                "Declined": route.params.declinedCasesCount
            }));
        }
    }, [route.params?.declinedCasesCount]);

    //PTP Cases Count
    useEffect(() => {
        if (route.params?.ptpCasesCount) {
            setPtpCases(route.params.ptpCasesCount);
            setCaseData(prevData => ({
                ...prevData,
                "PTP": route.params.ptpCasesCount
            }));
        }
    }, [route.params?.ptpCasesCount]);

    // Fully paid Cases count
    useEffect(() => {
        if (route.params?.fullyPaidCasesCount) {
            setFullyPaidCases(route.params.fullyPaidCasesCount);
            setCaseData(prevData => ({
                ...prevData,
                "Fully Paid Cases": route.params.fullyPaidCasesCount
            }));
        }
    }, [route.params?.fullyPaidCasesCount]);

    //Partially paid Cases
    useEffect(() => {
        if (route.params?.partialPaidCasesCount) {
            setPartialPaidCases(route.params.partialPaidCasesCount);
            setCaseData(prevData => ({
                ...prevData,
                "Partially Paid Cases": route.params.partialPaidCasesCount
            }));
        }
    }, [route.params?.partialPaidCasesCount]);

    //Not Contactable cases
    useEffect(() => {
        if (route.params?.notContactableCasesCount) {
            setNotContactableCases(route.params.notContactableCasesCount);
            setCaseData(prevData => ({
                ...prevData,
                "Not Contactable": route.params.notContactableCasesCount
            }));
        }
    }, [route.params?.notContactableCasesCount]);

    //Revisits cases number
    useEffect(() => {
        if (route.params?.revisitsCasesCount) {
            setRevisitsCases(route.params.revisitsCasesCount);
            setCaseData(prevData => ({
                ...prevData,
                "Revisits": route.params.revisitsCasesCount
            }));
        }
    }, [route.params?.revisitsCasesCount]);

    //Not visited cases number
    useEffect(() => {
        if (route.params?.notVisitedCasesCount) {
            setNotVisitedCases(route.params.notVisitedCasesCount);
            setCaseData(prevData => ({
                ...prevData,
                "Not Visited": route.params.notVisitedCasesCount
            }));
        }
    }, [route.params?.notVisitedCasesCount]);

    //Others Case

    useEffect(() => {
        if (route.params?.othersCasesCount) {
            setOthersCases(route.params.othersCasesCount);
            setCaseData(prevData => ({
                ...prevData,
                "Others": route.params.othersCasesCount
            }));
        }
    }, [route.params?.othersCasesCount]);



    // Handler to navigate to different pages based on item
    const handlePress = (item) => {
        switch (item) {
            case "TL Assigned Cases":
                navigation.navigate('TLAssignedCasesPage');
                break;
            case "Follow-up Cases":
                navigation.navigate('FollowUpCasesPage');
                break;
            case "Declined":
                navigation.navigate('DeclinedCasesPage');
                break;
            case "PTP":
                navigation.navigate('PTPCasesPage');
                break;
            case "Fully Paid Cases":
                navigation.navigate('FullyPaidCasesPage');
                break;
            case "Partially Paid Cases":
                navigation.navigate('PartialPaidCasesPage');
                break;
            case "Not Contactable":
                navigation.navigate('NotContactableCasesPage');
                break;
            case "Revisits":
                navigation.navigate('RevisitsCasesPage');
                break;
            case "Not Visited":
                navigation.navigate('NotVisitedCasesPage');
                break;
            case "Others":
                navigation.navigate('OthersCasesPage');
                break;
            default:
                break;
        }
    };

    return (
        <View style={styles.container}>
            {/* Status Header */}
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Status</Text>
            </View>

            {/* Scrollable Content */}
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {["TL Assigned Cases","Follow-up Cases","Declined", "PTP", "Fully Paid Cases", "Partially Paid Cases", "Not Contactable", "Revisits", "Not Visited", "Others"].map((item, index) => (
                    <TouchableOpacity key={index} onPress={() => handlePress(item)}>
                        <View style={styles.itemContainer}>
                            <Text style={styles.statusText}>{item}</Text>
                            <View style={styles.extra}>
                                <Text style={styles.casesNumber}>{caseData[item]}</Text>
                                <ArrowSvg style={styles.arrowSvg} />
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: height * 0.02,
    },
    headerText: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: width * 0.05, 
        lineHeight: width * 0.06,
        color: '#000000',
    },
    scrollContainer: {
        paddingHorizontal: 16,
        backgroundColor: '#FFFFFF',
        borderColor: '#D4C4C4',
        borderWidth: 1,
        borderRadius: 8,
        paddingBottom: 60, // Ensure ScrollView ends above the footer
    },
    itemContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#D4C4C4',
        paddingVertical: 12,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    statusText: {
        fontFamily: 'Poppins',
        fontSize: 16,
        color: '#605E5E',
    },
    extra: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    casesNumber: {
        fontFamily: 'Poppins',
        fontSize: 15,
        color: '#000000',
        marginRight: 8,
    },
    arrowSvg: {
        width: 24,
        height: 24,
        color: '#000000',
    },
});

export default ScrollableDashboard;
