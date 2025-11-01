import { AutocompleteArrayInput, ReferenceArrayInput } from 'react-admin';

export const ProjectImagesInput = ({ source = 'imageIds' }) => (
    <ReferenceArrayInput
        source={source}
        reference="images"
        parse={(value) => (value ?? []).map((id) => Number(id))}
    >
        <AutocompleteArrayInput optionText="path" />
    </ReferenceArrayInput>
);

export const TransformProjectPayload = (data) => {
    const { imageIds, ...rest } = data;

    return {
        ...rest,
        imageIds: (imageIds ?? []).map((id) => Number(id)),
    };
};
