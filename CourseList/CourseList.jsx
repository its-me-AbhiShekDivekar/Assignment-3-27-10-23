import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

export const CourseList = () => {
  let students = [
    {
      studentName: 'abhishek',
      courses: [
        {
          courseName: 'JAVA',
          status: 'comPLETED',
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
          status: 'ComPleted',
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
          courseName: 'JAVA',
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
    <View style={styles.container}>
      <Text style={styles.title}>STUDENT COURSE DETAILS</Text>
      <ScrollView>
        {students.map((student,rollno) => {
          return (
            <View style={styles.eachStudent}>
              <Text style={styles.student}>{rollno+1}.{student.studentName} </Text>
              {student.courses.map((course, index) => {
                return (
                  <View
                    style={{
                      flex: 1,
                      alignContent: 'center',
                      alignItems: 'center',
                    }}>
                    {course.status.toUpperCase()=='Completed'.toUpperCase() ? (
                      <Text
                        style={[styles.course, {backgroundColor: 'yellow'}]}>
                        <Text> {index + 1}.</Text> {course.courseName}
                      </Text>
                    ) : (
                      <Text style={[styles.course, {backgroundColor: 'grey'}]}>
                        <Text> {index + 1}.</Text> {course.courseName}
                      </Text>
                    )}
                  </View>
                );
              })}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'pink',
  },
  student: {
    color: 'black',
    fontStyle: 'italic',
    fontSize: 30,
    fontWeight: '500',
    textTransform: 'uppercase',
    width:200,
    margin:7,
    textAlign:'center',
    textDecorationLine: 'underline',
    backgroundColor:'salmon',
    borderWidth:1,
    borderRadius:5
  },
  course: {
    color: 'black',
    fontStyle: 'normal',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'left',
    width: 200,
    margin: 5,
  },
  eachStudent: {
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 20,
    marginBottom: 10,
    backgroundColor: 'skyblue',
    width: 300,
  },
  title: {
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: 'grey',
    borderWidth: 2,
    borderRadius: 5,
    margin:3,
    width:'100%'
  },
});
