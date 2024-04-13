import React from 'react'
import { useRouteError } from 'react-router'

const ErrorPage = () => {
    const error = useRouteError ();
  return (
    <div>An error occured {error.status} {error.statusText}</div>
  )
}

export default ErrorPage