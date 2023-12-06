const IndividualCard = (props) => {
  const createRow = (holes) => {
    const rows = Array(holes).fill(null);
    return rows.map((_, index) => {
      return (
        <div key={index} class="col">
          hole: {index + 1}
        </div>
      );
    });
  };

  return (
    <>
      <div class="container text-center">
        <div class="row">
          {props.gameType === 9 ? createRow(9) : createRow(18)}
        </div>
      </div>
    </>
  );
};

export default IndividualCard;
