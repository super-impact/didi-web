import Caption1 from 'components/atoms/Typography/Caption1';
import Heading2 from 'components/atoms/Typography/Heading2';
import { ErrorMessage, FieldWithTitle, LockedTextField, TextField } from 'components/molecules/Form';
import MultiSelectField from 'components/molecules/Form/MultiSelectField';
import { useFormik } from 'formik';
import React from 'react';
import ReactLoading from 'react-loading';
import styled, { css } from 'styled-components';
import { BreakPoints } from 'utils';
import * as Yup from 'yup';

// TODO: categories를 서버에서 가지고 오게 한다.
const CATEGORIES = [
  {
    label: "서버",
    value: "server"
  },
  {
    label: "웹",
    value: "web"
  }
];

function convertSelectOptionsToValue(
  options: { label: string; value: string }[]
) {
  return options.map(option => ({ name: option.value }));
}

const ContentDetailSchema = Yup.object().shape({
  title: Yup.string()
    .max(32)
    .required("제목을 입력해 주세요"),
  description: Yup.string().required("설명을 입력해 주세요"),
  topics: Yup.array()
    .of(Yup.string())
    .required("카테고리를 선택해 주세요")
});

interface Props {
  contentLink: string;
  loading: boolean;
  errorMessage?: string;
  onSubmit: (
    title: string,
    description: string,
    contentLink: string,
    topics: { name: string }[]
  ) => void;
}

const ContentDetailWrite: React.FC<Props> = props => {
  const { contentLink, onSubmit, errorMessage, loading } = props;

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      topics: []
    },
    validationSchema: ContentDetailSchema,
    onSubmit: values => {
      const { title, description } = values;
      const topics = convertSelectOptionsToValue(values.topics);

      onSubmit(title, description, contentLink, topics);
    }
  });

  const changeTopics = (
    value:
      | {
          label: string;
          value: string;
        }[]
      | React.ChangeEvent<any>
  ) => {
    formik.setFieldValue("topics", value);
  };

  return (
    <Container>
      <Title>공유할 콘텐츠 정보를 작성해주세요</Title>
      {errorMessage && <StyledErrorMessage message={errorMessage} />}
      <form onSubmit={formik.handleSubmit}>
        <StyledFieldWithTitle title="콘텐츠 URL">
          <LockedTextField value={contentLink} />
        </StyledFieldWithTitle>
        <StyledFieldWithTitle title="제목">
          <TextField
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
          />
        </StyledFieldWithTitle>
        <StyledFieldWithTitle title="설명">
          <TextField
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
          />
        </StyledFieldWithTitle>
        <StyledFieldWithTitle title="카테고리">
          <MultiSelectField
            name="topics"
            value={formik.values.topics}
            onChange={changeTopics}
            placeholder="어울리는 카테고리를 선택해주세요"
            options={CATEGORIES}
          />
        </StyledFieldWithTitle>
        <ButtonContainer>
          <Button
            type="submit"
            disabled={
              !formik.dirty ||
              !!formik.errors.title ||
              !!formik.errors.description ||
              !!formik.errors.topics
            }
            loading={loading}
          >
            {loading ? (
              <ReactLoading
                type="spin"
                color="#17487f"
                width="24px"
                height="24px"
              />
            ) : (
              <Caption1 color="white" fontWeight="bold">
                공유하기
              </Caption1>
            )}
          </Button>
        </ButtonContainer>
      </form>
    </Container>
  );
};

export default React.memo(ContentDetailWrite);

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled(Heading2)`
  margin-bottom: 24px;
`;

const StyledFieldWithTitle = styled(FieldWithTitle)`
  margin-bottom: 12px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 32px;

  ${BreakPoints.media.tablet`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 14px 16px;
    align-items: center;
    margin-top: 0;
  `}
`;

const Button = styled.button<{ loading: boolean }>`
  display: flex;
  justify-content: center;
  outline: none;
  border: 1px solid #17487f;
  background-color: #17487f;
  color: white;
  font-weight: bold;
  border-radius: 3px;
  padding: 12px 12px;
  cursor: pointer;
  width: 140px;

  :disabled {
    background-color: #f3f3f3;
    border: 1px solid #f3f3f3;
    cursor: not-allowed;
  }

  :hover:enabled {
    background-color: #315288;
    border: 1px solid #315288;
  }

  ${props =>
    props.loading &&
    css`
      background-color: #f3f3f3 !important;
      border: 1px solid #f3f3f3 !important;
      cursor: not-allowed;
    `}

  ${BreakPoints.media.tablet`
    width: 140px;
  `}
`;

const StyledErrorMessage = styled(ErrorMessage)`
  margin-bottom: 8px;
`;
