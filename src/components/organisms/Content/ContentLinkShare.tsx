import Caption1 from 'components/atoms/Typography/Caption1';
import Heading2 from 'components/atoms/Typography/Heading2';
import { ErrorMessage, TextField } from 'components/molecules/Form';
import { useFormik } from 'formik';
import React, { useCallback, useMemo } from 'react';
import ReactLoading from 'react-loading';
import styled, { css } from 'styled-components';
import { BreakPoints } from 'utils';
import * as Yup from 'yup';

type FormikValues = {
  contentURL: string;
};

const URLSchema = Yup.object().shape({
  contentURL: Yup.string()
    .url("공유할 콘텐츠는 URL 주소여야 합니다")
    .required("공유할 콘텐츠는 URL 주소여야 합니다")
});

interface Props {
  loading: boolean;
  errorMessage?: string;
  onSubmit: (contentLink: string) => void;
}

const ContentLinkShare: React.FC<Props> = props => {
  const { errorMessage, loading, onSubmit } = props;

  const handleSubmit = useCallback(
    (values: FormikValues) => {
      onSubmit(values.contentURL);
    },
    [onSubmit]
  );

  const initialValues = useMemo(
    () => ({
      contentURL: ""
    }),
    []
  );

  const initialErrors = useMemo(() => ({ contentURL: errorMessage }), [
    errorMessage
  ]);

  const formik = useFormik({
    initialValues,
    initialErrors,
    onSubmit: handleSubmit,
    validationSchema: URLSchema,
    enableReinitialize: true
  });

  return (
    <Container>
      <Title>콘텐츠 링크를 채워주세요</Title>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          name="contentURL"
          placeholder="콘텐츠 URL 주소"
          onChange={formik.handleChange}
          value={formik.values.contentURL}
          isError={!!formik.errors.contentURL}
        />
        {formik.errors.contentURL && (
          <StyledErrorMessage message={formik.errors.contentURL} />
        )}
        <ButtonContainer>
          <Button
            type="submit"
            disabled={!formik.dirty || !!formik.errors.contentURL}
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
                다음
              </Caption1>
            )}
          </Button>
        </ButtonContainer>
      </form>
    </Container>
  );
};

export default React.memo(ContentLinkShare);

const Container = styled.div`
  width: 100%;
`;

const Title = styled(Heading2)`
  margin-bottom: 22px;
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

const StyledErrorMessage = styled(ErrorMessage)`
  margin-top: 8px;
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
