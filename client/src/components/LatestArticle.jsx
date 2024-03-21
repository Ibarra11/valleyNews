function LatestArticle(itemData) {
    return (
        <div className="unset-border-box shadow-gray-700 shadow-md bg-brown-400 p-8 rounded-lg flex flex-row max-md:flex-col md:gap-x-8 gap-4 md:justify-center md:w-[80vw]">
        {itemData.map((thumbnail, i) => (
          <div className="shadow-gray-700 shadow-md bg-brown-100 p-3 rounded-lg flex justify-between flex-row" key={i}>
            <img className="object-cover h-48 w-96" component="img" src={[thumbnail.articleImg]}></img>
            <div className="flex flex-col px-[2em]">
                <div className='text-lg py-1.5 font-bold'>{thumbnail.articleTitle}</div>
                    <div className='py-1.5'>{thumbnail.articleBody}</div>
                    <div className="flex items-end justify-end">
                    <img className="w-10 h-10 rounded-full mr-4" component="img" src={[thumbnail.authorImg]} alt="User"/>
                    <div className="text-sm flex items-stretch flex-col">
                        <p className="text-gray-900 leading-none">{thumbnail.articleAuthor}</p>
                        <p className="text-gray-600">{thumbnail.articleDate}</p>
                    </div>
                </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default LatestArticle;
  