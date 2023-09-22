import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

interface IUserData {
  title?: string;
  data: Object | any;
  testID: string;
}

const UserData = ({title, data, testID}: IUserData) => {
  return (
    <>
      <View testID={testID} style={styles.container}>
        <View style={styles.whiteContainer}>
          <Text style={styles.title}>{title}</Text>

          <View style={styles.dataContainer}>
            <Text>Address</Text>
            <Text style={styles.fw}>{data?.address?.address}</Text>
          </View>

          <View style={styles.dataContainer}>
            <Text>City</Text>
            <Text style={styles.fw}>{data?.address?.city}</Text>
          </View>

          <View style={styles.dataContainer}>
            <Text>Coordinates</Text>
            <Text style={styles.fw}>
              lat:{data?.address?.coordinates?.lat}
              {'\n'}
              long:{data?.address?.coordinates?.lng}
            </Text>
          </View>

          <View style={styles.dataContainer}>
            <Text>PostalCode</Text>
            <Text style={styles.fw}>{data?.address?.postalCode}</Text>
          </View>

          <View style={styles.dataContainer}>
            <Text>State</Text>
            <Text style={styles.fw}>{data?.address?.state}</Text>
          </View>

          <View style={styles.dataContainer}>
            <Text>Age</Text>
            <Text style={styles.fw}>{data?.age}</Text>
          </View>

          <View style={styles.dataContainer}>
            <Text>CardExpire</Text>
            <Text style={styles.fw}>{data?.bank?.cardExpire}</Text>
          </View>

          <View style={styles.dataContainer}>
            <Text>CardNumber</Text>
            <Text style={styles.fw}>{data?.bank?.cardNumber}</Text>
          </View>

          <View style={styles.dataContainer}>
            <Text>CardType</Text>
            <Text style={styles.fw}>{data?.bank?.cardType}</Text>
          </View>

          <View style={styles.dataContainer}>
            <Text>BirthDate</Text>
            <Text style={styles.fw}>
              {data?.birthDate?.split('-')?.reverse()?.join('/')}
            </Text>
          </View>

          <View style={styles.dataContainer}>
            <Text>BloodGroup</Text>
            <Text style={styles.fw}>{data?.bloodGroup}</Text>
          </View>

          <View style={styles.dataContainer}>
            <Text>Company address</Text>
            <Text style={styles.fw}>{data?.company?.address?.address}</Text>
          </View>

          <View style={styles.dataContainer}>
            <Text>City</Text>
            <Text style={styles.fw}>{data?.company?.address?.city}</Text>
          </View>

          <View style={styles.dataContainer}>
            <Text>Coordinates</Text>
            <Text style={styles.fw}>
              lat: {data?.company?.address?.coordinates?.lat}
              {'\n'}
              long: {data?.company?.address?.coordinates?.lng}
            </Text>
          </View>

          <View style={styles.dataContainer}>
            <Text>Postal Code</Text>
            <Text style={styles.fw}>{data?.company?.address?.postalCode}</Text>
          </View>

          <View style={styles.dataContainer}>
            <Text>State</Text>
            <Text style={styles.fw}>{data?.company?.address?.state}</Text>
          </View>

          <View style={styles.dataContainer}>
            <Text>Department</Text>
            <Text style={styles.fw}>{data?.company?.department}</Text>
          </View>

          <View style={styles.dataContainer}>
            <Text>Name</Text>
            <Text style={styles.fw}>{data?.company?.name}</Text>
          </View>

          <View style={styles.dataContainer}>
            <Text>Domain</Text>
            <Text style={styles.fw}>{data?.domain}</Text>
          </View>

          <View style={styles.dataContainer}>
            <Text>ein</Text>
            <Text style={styles.fw}>{data?.ein}</Text>
          </View>

          <View style={styles.dataContainer}>
            <Text>Email</Text>
            <Text style={styles.fw}>{data?.email}</Text>
          </View>

          <View style={styles.dataContainer}>
            <Text>Eye Color</Text>
            <Text style={styles.fw}>{data?.eyeColor}</Text>
          </View>

          <View style={styles.dataContainer}>
            <Text>FirstName</Text>
            <Text style={styles.fw}>{data?.firstName}</Text>
          </View>

          <View style={styles.dataContainer}>
            <Text>Gender</Text>
            <Text style={styles.fw}>{data?.gender}</Text>
          </View>

          <View style={styles.dataContainer}>
            <Text>Hair Color</Text>
            <Text style={styles.fw}>{data?.hair?.color}</Text>
          </View>

          <View style={styles.dataContainer}>
            <Text>Hair Type</Text>
            <Text style={styles.fw}>{data?.hair?.type}</Text>
          </View>

          <View style={styles.dataContainer}>
            <Text>height</Text>
            <Text style={styles.fw}>{data?.height}</Text>
          </View>

          <View style={styles.dataContainer}>
            <Text>id</Text>
            <Text style={styles.fw}>{data?.id}</Text>
          </View>

          <View style={styles.dataContainer}>
            <Text>ip</Text>
            <Text style={styles.fw}>{data?.ip}</Text>
          </View>

          <View style={styles.dataContainer}>
            <Text>Lastname</Text>
            <Text style={styles.fw}>{data?.lastName}</Text>
          </View>

          <View style={styles.dataContainer}>
            <Text>MacAddress</Text>
            <Text style={styles.fw}>{data?.macAddress}</Text>
          </View>

          <View style={styles.dataContainer}>
            <Text>MaidenName</Text>
            <Text style={styles.fw}>{data?.maidenName}</Text>
          </View>

          <View style={styles.dataContainer}>
            <Text>Password</Text>
            <Text style={styles.fw}>{data?.Password}</Text>
          </View>

          <View style={styles.dataContainer}>
            <Text>Phone</Text>
            <Text style={styles.fw}>{data?.phone}</Text>
          </View>

          <View style={styles.dataContainer}>
            <Text>SSN</Text>
            <Text style={styles.fw}>{data?.ssn}</Text>
          </View>

          <View style={styles.dataContainer}>
            <Text>University</Text>
            <Text style={styles.fw}>{data?.university}</Text>
          </View>

          <View style={styles.dataContainer}>
            <Text>UserAgent</Text>
            <Text style={styles.fw}>{data?.userAgent}</Text>
          </View>

          <View style={styles.dataContainer}>
            <Text>Username</Text>
            <Text style={styles.fw}>{data?.username}</Text>
          </View>

          <View style={styles.dataContainer}>
            <Text>Weight</Text>
            <Text style={styles.fw}>{data?.weight}</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default UserData;
