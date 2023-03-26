import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { GithubContainer, ContentGitHub, Itens, Foto, ListProject, ButtonDefault } from './styles';

export default function GitHub() {

    const [userGit, setUserGit] = useState([])
    const [projects, setProjects] = useState([])
    const [errorMsg, setErroMmsg] = useState("")

    useEffect(() => {
        getApigit()
        getApigitRepos()
    }, [])

    function getApigit() {
        axios.get('https://api.github.com/users/samarasofe', {

        })
            .then(function (response) {
                setUserGit(response.data)
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
                setErroMmsg("GitHub temporariamente fora de serviço!")

            });
    }

    function getApigitRepos () {
        axios.get('https://api.github.com/users/samarasofe/repos', {

        })
            .then(function (response) {
                console.log(response);
                setProjects(response.data)
            })
            .catch(function (error) {
                console.log(error);
                setErroMmsg("GitHub temporariamente fora de serviço!")
            });
    }

    return (
        <GithubContainer>
            <ContentGitHub>
                <h2 id='github-id'>GitHub</h2>
                <Itens >
                    <Foto>
                        <img src={userGit.avatar_url}alt='Foto GitHub' />
                        <h3>{userGit.name}</h3>
                        <h4>{userGit.login}</h4>
                        <p>{userGit.bio}</p>
                    </Foto>
                    <ListProject>
                        {
                            projects.slice(0, 4).map((project) =>
                            <div key={project.id}>
                                <a href={project.html_url} target='_blank' rel='noreferrer'>
                                    <h3>{project.name}</h3>
                                </a>
                                <p>{project.description}</p>
                            </div>
                            )
                        }
                    </ListProject>
                    <p>{errorMsg}</p>
                </Itens>
                <ButtonDefault>
                    <a href='https://github.com/samarasofe' target='_blank' rel='noreferrer'>
                        See all
                    </a>
                </ButtonDefault>
            </ContentGitHub>
        </GithubContainer>
    )
}

