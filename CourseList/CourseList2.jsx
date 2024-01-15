import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const CourseList2 = () => {
  let students = [
    {
      studentName: 'abhishek',
      courses: [
        {
          courseName: 'JAVA',
          status: 'CompleteD',
        },
        {
          courseName: 'HTML',
          status: 'Completed',
        },
        {
          courseName: 'CSS',
          status: 'Pending',
        },
        {
          courseName: 'JAVASCRIPT',
          status: 'Completed',
        },
      ],
    },
    {
      studentName: 'Tirthesh',
      courses: [
        {
          courseName: 'PYTHON',
          status: 'Pending',
        },
        {
          courseName: 'HTML',
          status: 'Pending',
        },
        {
          courseName: 'CSS',
          status: 'Pending',
        },
        {
          courseName: 'JAVASCRIPT',
          status: 'Pending',
        },
      ],
    },
    {
      studentName: 'Suraj',
      courses: [
        {
          courseName: 'JAVA',
          status: 'Pending',
        },
        {
          courseName: 'HTML',
          status: 'Completed',
        },
        {
          courseName: 'CSS',
          status: 'Pending',
        },
        {
          courseName: 'JAVASCRIPT',
          status: 'Completed',
        },
      ],
    },
    {
      studentName: 'sagar',
      courses: [
        {
          courseName: 'JAVA',
          status: 'Pending',
        },
        {
          courseName: 'HTML',
          status: 'Completed',
        },
        {
          courseName: 'CSS',
          status: 'Pending',
        },
        {
          courseName: 'JAVASCRIPT',
          status: 'Completed',
        },
      ],
    },
    {
      studentName: 'pradip',
      courses: [
        {
          courseName: 'JAVA',
          status: 'Pending',
        },
        {
          courseName: 'HTML',
          status: 'Completed',
        },
        {
          courseName: 'CSS',
          status: 'Pending',
        },
        {
          courseName: 'JAVASCRIPT',
          status: 'Completed',
        },
      ],
    },
    {
      studentName: 'vaibhav',
      courses: [
        {
          courseName: 'JAVA',
          status: 'Pending',
        },
        {
          courseName: 'HTML',
          status: 'Completed',
        },

        {
          courseName: 'JAVASCRIPT',
          status: 'Completed',
        },
      ],
    },
    {
      studentName: 'hemant',
      courses: [
        {
          courseName: 'react',
          status: 'Pending',
        },
        {
          courseName: 'HTML',
          status: 'Completed',
        },
        {
          courseName: 'CSS',
          status: 'Completed',
        },
        {
          courseName: 'JAVASCRIPT',
          status: 'Completed',
        },
        {
          courseName: 'Python',
          status: 'Completed',
        },
      ],
    },
  ];
  return (
    <View style={styles.mainContainer}>
        <Text style={styles.title}>STUDENT COURSE DETAILS</Text>
      <FlatList
        data={students}
        renderItem={({item}) => {
          return (
            <View style={styles.eachStudent}>
              <Text style={styles.studentName}>{item.studentName}</Text>
              <FlatList
                data={item.courses}
                renderItem={({item}) => {
                  return item.status.toUpperCase() == 'Completed'.toUpperCase() ? (
                    <Text
                      style={[{backgroundColor: 'yellow'}, styles.eachCourse]}>
                      {item.courseName} :{' '}
                      <Text style={{fontWeight: '500', fontSize: 15}}>
                        COMPLETED
                      </Text>
                    </Text>
                  ) : (
                    <Text
                      style={[styles.eachCourse, {backgroundColor: 'grey'}]}>
                      {item.courseName} :{' '}
                      <Text style={{fontWeight: '500', fontSize: 15}}>
                        PENDING
                      </Text>
                    </Text>
                  );
                }}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default CourseList2;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'black',
    flex: 1,
    alignContent: 'space-around',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderWidth: 2,
    borderColor: 'white',
  },
  eachStudent: {
    backgroundColor: 'skyblue',
    borderWidth: 2,
    borderColor: 'white',
    margin: 10,
    width: 300,
    borderRadius:10
  },
  studentName: {
    color: 'purple',
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textTransform: 'uppercase',
    textDecorationLine: 'underline',
    textAlign: 'center',
    margin: 5,
  },
  eachCourse: {
    color: 'black',
    margin: 5,
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    textTransform:'uppercase'
  },
  title:{
    backgroundColor:'magenta',
    color:'white',
    fontSize:40,
    fontWeight:'bold',
    textAlign:'center',
    borderRadius:10,
    marginTop:5
  }
});
