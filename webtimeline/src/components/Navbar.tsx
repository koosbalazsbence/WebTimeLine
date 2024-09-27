const Navbar = () => {
  return (
    <>
      <div className="top-0 left-0 w-full p-4 border-x border-b shadow-sm bg-white flex items-center justify-evenly gap-2">
        <h1 className="text-center text-xl hover:scale-110 transition duration-300 flex items-center justify-center gap-2">
          WebTimeLine
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-5"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-1.5 0a6.5 6.5 0 1 1-11-4.69v.447a3.5 3.5 0 0 0 1.025 2.475L8.293 10 8 10.293a1 1 0 0 0 0 1.414l1.06 1.06a1.5 1.5 0 0 1 .44 1.061v.363a1 1 0 0 0 .553.894l.276.139a1 1 0 0 0 1.342-.448l1.454-2.908a1.5 1.5 0 0 0-.281-1.731l-.772-.772a1 1 0 0 0-1.023-.242l-.384.128a.5.5 0 0 1-.606-.25l-.296-.592a.481.481 0 0 1 .646-.646l.262.131a1 1 0 0 0 .447.106h.188a1 1 0 0 0 .949-1.316l-.068-.204a.5.5 0 0 1 .149-.538l1.44-1.234A6.492 6.492 0 0 1 16.5 10Z"
              clipRule="evenodd"
            />
          </svg>
        </h1>
        <div className="flex items-center justify-end">
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5"
            >
              <path d="M7.75 2.75a.75.75 0 0 0-1.5 0v1.258a32.987 32.987 0 0 0-3.599.278.75.75 0 1 0 .198 1.487A31.545 31.545 0 0 1 8.7 5.545 19.381 19.381 0 0 1 7 9.56a19.418 19.418 0 0 1-1.002-2.05.75.75 0 0 0-1.384.577 20.935 20.935 0 0 0 1.492 2.91 19.613 19.613 0 0 1-3.828 4.154.75.75 0 1 0 .945 1.164A21.116 21.116 0 0 0 7 12.331c.095.132.192.262.29.391a.75.75 0 0 0 1.194-.91c-.204-.266-.4-.538-.59-.815a20.888 20.888 0 0 0 2.333-5.332c.31.031.618.068.924.108a.75.75 0 0 0 .198-1.487 32.832 32.832 0 0 0-3.599-.278V2.75Z" />
              <path
                fillRule="evenodd"
                d="M13 8a.75.75 0 0 1 .671.415l4.25 8.5a.75.75 0 1 1-1.342.67L15.787 16h-5.573l-.793 1.585a.75.75 0 1 1-1.342-.67l4.25-8.5A.75.75 0 0 1 13 8Zm2.037 6.5L13 10.427 10.964 14.5h4.073Z"
                clipRule="evenodd"
              />
            </svg>
          </p>
        </div>
      </div>
    </>
  )
}

export default Navbar
