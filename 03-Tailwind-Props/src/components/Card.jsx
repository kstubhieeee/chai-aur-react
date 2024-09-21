function Card() {
  return (
    <div>
      <div className="max-w-sm bg-white border mb-5 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="m-5 ml-24 w-50 rounded-t-lg"
            src="https://media.licdn.com/dms/image/v2/C4E0BAQGMkpd7khJwXA/company-logo_200_200/company-logo_200_200/0/1630443963930/jsgroupinternational_logo?e=2147483647&v=beta&t=mfovMkt0AqYjZzfCscTMAv1yzJxGENJdLzfZ9HvA1-Q"
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
