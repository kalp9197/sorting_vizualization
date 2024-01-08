import { Box } from "@chakra-ui/react"
import React from "react"

const Visualiser = ({ data }) => {
  return (
    <Box
      rounded={"lg"}
      display="grid"
      gridAutoFlow={"column"}
      gridAutoColumns={"auto"}
      bg="gray.100"
      minH={"full"}
      overflow={"auto"}
      flex="1"
    >
      {data.map((d) => {
        return (
          <Box
            display={"flex"}
            justifyContent="flex-end"
            textAlign="center"
            flexDirection="column"
          >

            <p>{d}</p>
            <Box
              roundedTop={"sm"}
              border={"1px"}
              borderColor={"purple.200"}
              bg={"red.300"}
              style={{ height: `${d}px` }}
            ></Box>
          </Box>
        )
      })}
    </Box>
  )
}

export default Visualiser;
