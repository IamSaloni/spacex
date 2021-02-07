import React, { Component } from "react";

class LaunchProgram extends Component {
  render() {
    let arr = [1, 2, 3];
    const [a, b, c] = arr;

    const {
      flight_number,
      mission_name,
      mission_id,
      launch_year,
      launch_success,
      links: { mission_patch_small },
      rocket: {
        first_stage: {
          cores: [{ land_success }],
        },
      },
    } = this.props;

    return (
      <div className="program">
        <figure className="program_figure">
          <img src={mission_patch_small} alt={mission_name} />
          <figcaption className="program_figcaption">{`${mission_name} #${flight_number}`}</figcaption>
        </figure>

        <h4>Mission ids:</h4>
        <ul>
          {mission_id.map((id) => {
            return <li key={id}>{id}</li>;
          })}
        </ul>
        <div>
          <h4>Launch year:</h4>
          <p>{launch_year}</p>
        </div>
        <div>
          <h4>Successful Launch:</h4>
          <p>{launch_success.toString()}</p>
        </div>
        <div>
          <h4>Successful Landing:</h4>
          <p>{(!!land_success).toString()}</p>
        </div>
      </div>
    );
  }
}

export default LaunchProgram;
