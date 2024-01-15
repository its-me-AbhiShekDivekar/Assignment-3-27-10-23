import React from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';
let students = [
  {
    studentName: 'abhishek',
    data: [
      {
        courseName: 'JAVA',
        status: 'Coplet',
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
    data: [
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
    data: [
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
    data: [
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
    data: [
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
    data: [
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
    data: [
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
const courseList3 = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>STUDENT COURSE DETAILS</Text>
      <SectionList
        style={{flex: 1}}
        sections={students}
        // renderItem={({item})=>{
        //     return(
        //         <View>
        //             <Text>{item.courseName}</Text>
        //         </View>
        //     )
        // }}

        renderItem={course => {
          return (
            <View>
              {course.item.status.toUpperCase() == 'Completed'.toUpperCase() ? (
                <Text style={[styles.eachCourse, {backgroundColor: 'yellow'}]}>
                  {course.item.courseName}
                </Text>
              ) : (
                <Text style={[styles.eachCourse, {backgroundColor: 'grey'}]}>
                  {course.item.courseName}
                </Text>
              )}
            </View>
          );
        }}
        renderSectionHeader={studentName => (
          <Text style={styles.studentName}>
            {studentName.section.studentName}
          </Text>
        )}
      />
    </View>
  );
};

export default CourseList3;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'red',
    flex: 1,
    // alignContent:'center',
    justifyContent: 'space-evenly',
    // alignItems:'center',
    borderWidth: 2,
    borderColor: 'black',
  },
  eachCourse: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    borderWidth: 2,
    borderColor: 'white',
    marginTop: 2,
    width: 300,
    textTransform: 'uppercase',
    borderRadius: 5,
    marginBottom: 2,
    marginLeft: 50,
  },
  studentName: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    borderWidth: 2,
    borderColor: 'white',
    marginTop: 20,
    marginLeft: 10,
    width: 300,
    backgroundColor: 'white',
    textTransform: 'uppercase',
    borderRadius: 5,
    fontStyle: 'italic',
  },
  title: {
    backgroundColor: 'black',
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    borderRadius: 10,
    marginTop: 2,
  },
});
