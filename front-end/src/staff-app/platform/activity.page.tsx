import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Spacing } from "shared/styles/styles"
import { Person } from "shared/models/person"
import { StudentListTile } from "staff-app/components/student-list-tile/student-list-tile.component"
import { useApi } from "shared/hooks/use-api"

export const ActivityPage: React.FC = () => {
  const [getActivities, data, loadState, error] = useApi({ url: "get-activities" });

  useEffect(() => {
    void getActivities()
  }, [getActivities]);

  console.log(data);

  if (error) return <div>Failed to Load.....</div>

  if (loadState === 'loading') return <div>Loading....</div>

  return <S.Container>
    <h1>Activity Page</h1>
  </S.Container>
}

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: ${Spacing.u4} auto 0;
  `,
}
