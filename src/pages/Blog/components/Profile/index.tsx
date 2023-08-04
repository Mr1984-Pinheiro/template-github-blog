import { ExternalLink } from "../../../../components/ExternalLink";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";

export function Profile() {
  return (
    <>
      <ProfileContainer>
        <ProfilePicture src="https://github.com/Mr1984-Pinheiro.png" />

        <ProfileDetails>
          <header>
            <h1>Carlos Pinheiro</h1>

            <ExternalLink text="Github" href="#" />
          </header>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis illo
            quibusdam corrupti aspernatur dolorum beatae a nostrum dolore in
            ipsam voluptates.
          </p>
          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              {/* {profileData.login} */}
              Mr1984-Pinheiro
            </li>

            <li>
              <FontAwesomeIcon icon={faBuilding} />
              {/* {profileData.company} */}
              Autonomo
            </li>

            <li>
              <FontAwesomeIcon icon={faUserGroup} />
              {/* {profileData.followers} seguidores */}
              123 seguidores
            </li>
          </ul>
        </ProfileDetails>
      </ProfileContainer>
    </>
  );
}
