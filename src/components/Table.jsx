import React from "react";

export default function Table({ data }) {
  // const { NIN, State, gender, homeAdress } = data;

  console.log(data);

  return (
    <div>
      <table>
        <caption>Our Agents</caption>
        <thead>
          <tr>
            <th>Fullname</th>
            {/* <th>state of origin</th>
            <th>Local Government</th> */}
            <th>Home-Adress</th>
            <th>Office-Adress</th>
            <th>mobile</th>
            <th>email</th>
          </tr>
        </thead>
        {data &&
          data.map((user) => {
            return (
              <>
                <tbody>
                  <tr>
                    <th>{user.displayName}</th>
                    {/* <td>{user.State}</td>
                    <td>{user.localGovt}</td> */}
                    <td>{user.homeAdress}</td>
                    <td>{user.officeAdress}</td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                  </tr>
                  {/* <tr>
                    <th scope="row">Break</th>
                    <td>
                      <time>11am</time>-<time>12pm</time>
                    </td>
                    <td>
                      Eat launch Lorem ipsum, dolor sit amet consectetur
                      adipisicing.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Afternoon</th>
                    <td>
                      <time>12pm</time>-<time>17pm</time>
                    </td>
                    <td>Study for other course</td>
                  </tr>
                  <tr>
                    <th>Evening</th>
                    <td>
                      All other times Lorem ipsum dolor sit amet. Lorem ipsum
                      dolor sit amet consectetur adipisicing elit.
                      Necessitatibus ipsam temporibus laudantium non culpa vel
                      facilis facere itaque nisi enim.
                    </td>
                    <td>Free time</td>
                  </tr>
                  <tr>
                    <th scope="row">Night</th>

                    <td>Sleep</td>
                  </tr> */}
                </tbody>
              </>
            );
          })}
      </table>
    </div>
  );
}
