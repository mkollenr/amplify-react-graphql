/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UntitledModelUpdateFormInputValues = {
    AWSDat?: string;
};
export declare type UntitledModelUpdateFormValidationValues = {
    AWSDat?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UntitledModelUpdateFormOverridesProps = {
    UntitledModelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    AWSDat?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UntitledModelUpdateFormProps = React.PropsWithChildren<{
    overrides?: UntitledModelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    untitledModel?: any;
    onSubmit?: (fields: UntitledModelUpdateFormInputValues) => UntitledModelUpdateFormInputValues;
    onSuccess?: (fields: UntitledModelUpdateFormInputValues) => void;
    onError?: (fields: UntitledModelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UntitledModelUpdateFormInputValues) => UntitledModelUpdateFormInputValues;
    onValidate?: UntitledModelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UntitledModelUpdateForm(props: UntitledModelUpdateFormProps): React.ReactElement;
