import './ads.css'

export const AdsGrid = ({ data }) => {
  console.log("data", data);

  return (
    <div  className="grid">
      {data.length &&
        data.map((ad) => {
          return (
             <div className='shadow' key={ad._id}>
            <div>
              <b>Company url:</b> {ad.company.url}
            </div>
              <div><b>Company name:</b>{ad.company.name}</div>
              <div><b>CTA:</b>{ad.cta}</div>
              <div><b>Description:</b>{ad.description}</div>
              <div><b>Headline:</b>{ad.headline}</div>
              <div>
                <img src={ad.imgUrl} alt={ad.company.name}/>
              </div>
              <div><b>Primary text:</b>{ad.primaryText}</div>
            </div>  
          );
        })}
    </div>
  );
};
