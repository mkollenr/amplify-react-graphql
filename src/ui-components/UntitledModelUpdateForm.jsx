/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getUntitledModel } from "../graphql/queries";
import { updateUntitledModel } from "../graphql/mutations";
const client = generateClient();
export default function UntitledModelUpdateForm(props) {
  const {
    id: idProp,
    untitledModel: untitledModelModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    AWSDat: "",
  };
  const [AWSDat, setAWSDat] = React.useState(initialValues.AWSDat);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = untitledModelRecord
      ? { ...initialValues, ...untitledModelRecord }
      : initialValues;
    setAWSDat(cleanValues.AWSDat);
    setErrors({});
  };
  const [untitledModelRecord, setUntitledModelRecord] = React.useState(
    untitledModelModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getUntitledModel.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getUntitledModel
        : untitledModelModelProp;
      setUntitledModelRecord(record);
    };
    queryData();
  }, [idProp, untitledModelModelProp]);
  React.useEffect(resetStateValues, [untitledModelRecord]);
  const validations = {
    AWSDat: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          AWSDat: AWSDat ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateUntitledModel.replaceAll("__typename", ""),
            variables: {
              input: {
                id: untitledModelRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "UntitledModelUpdateForm")}
      {...rest}
    >
      <TextField
        label="Aws dat"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={AWSDat}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              AWSDat: value,
            };
            const result = onChange(modelFields);
            value = result?.AWSDat ?? value;
          }
          if (errors.AWSDat?.hasError) {
            runValidationTasks("AWSDat", value);
          }
          setAWSDat(value);
        }}
        onBlur={() => runValidationTasks("AWSDat", AWSDat)}
        errorMessage={errors.AWSDat?.errorMessage}
        hasError={errors.AWSDat?.hasError}
        {...getOverrideProps(overrides, "AWSDat")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || untitledModelModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || untitledModelModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
