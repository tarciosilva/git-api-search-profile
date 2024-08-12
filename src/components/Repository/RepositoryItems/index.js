import * as S from './style'

const RepositotyItem = ({ name, fullName, linkToRepo }) => {
  return (
    <S.WrapperItem>
      <S.Title>{name}</S.Title>
      <S.SubTitle>{fullName}</S.SubTitle>
      <S.LinkItem href={linkToRepo} target="_blank" rel="noreferrer">
        {linkToRepo}
      </S.LinkItem>
    </S.WrapperItem>
  );
};
export default RepositotyItem;
