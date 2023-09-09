import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Badge,
  Box,
  Center,
  Grid,
  Heading,
  Image,
  Spinner,
} from "@chakra-ui/react";
import AddNew from "./AddNew";

function City(props) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = () => {
    try {
      axios.get(`http://localhost:3000/cities`).then((res) => {
        console.log(res.data);
        setData(res.data);
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <Center>
        {" "}
        <Spinner size={"md"} />
      </Center>
    );
  }
  return (
    <>
      <Center>
        <Heading>Top 10 Cities in UP</Heading>
        <AddNew />
      </Center>
      <Grid gridTemplateColumns={"repeat(3, 1fr)"} gap={"20px"} margin={"4rem"}>
        {data.length > 0 &&
          data.map((element, index) => {
            return (
              <Box
                key={index}
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                _hover={{boxShadow:" rgba(149, 157, 165, 0.2) 0px 8px 24px;"}}
              >
                <Image src={element.img} alt="city image" />

                <Box p="6">
                  <Box display="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                      {element.name}
                    </Badge>
                  </Box>

                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    
                  >
                    {element.description}
                  </Box>
                </Box>
              </Box>
            );
          })}
      </Grid>
    </>
  );
}

export default City;
