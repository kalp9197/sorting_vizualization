import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Select,
    Slider,
    SliderFilledTrack,
    SliderThumb,
    SliderTrack,
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  
  const Sidebar = ({ generateArr, sort, generating, sorting }) => {
    const [formState, setFormState] = useState({
      size: 10,
      algorithm: "linear",
    });
    console.log(formState, generating, sorting);
    return (
      <Box minW="xs" bg="gray.100" p={"4"} borderRadius="lg" overflow="hidden">
        {/* <form> */}
        <FormControl>
          <FormLabel htmlFor="size">{`Array Size (${formState.size})`}</FormLabel>
          <Slider
            onChangeEnd={(v) => setFormState({ ...formState, size: v })}
            aria-label={"10"}
            min={10}
            max={200}
            defaultValue={10}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="algorithm">Algorithm</FormLabel>
          <Select
            onChange={(v) => setFormState({ ...formState, algorithm: v })}
            bg={"white"}
            id="algorithm"
            variant={"outline"}
          >
            <option value="simple">Simple</option>
            <option value="select">Selection</option>
            <option value="insert">Insertion</option>
          </Select>
        </FormControl>
        <Flex gap={"3"} mt={"5"} direction="row">
          <Button
            disabled={sorting}
            isLoading={generating}
            onClick={() => {
              generateArr(formState);
            }}
            loadingText="Generating"
            colorScheme="purple"
          >
            Generate Array
          </Button>
  
          <Button
            disabled={generating}
            isLoading={sorting}
            loadingText="Sorting"
            onClick={sort}
            colorScheme="purple"
            variant="outline"
          >
            Sort
          </Button>
        </Flex>
      </Box>
    );
  };
  
  export default Sidebar;