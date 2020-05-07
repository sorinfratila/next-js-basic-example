import React from "react";
import Link from "next/link";

function errorPage() {
  return (
    <div>
      <h1>Oops, something went wrong</h1>
      <p>
        Try{" "}
        <Link href="/">
          <a>going back</a>
        </Link>
      </p>
    </div>
  );
}

export default errorPage;
