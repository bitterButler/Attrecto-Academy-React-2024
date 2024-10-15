import React, { FC, ReactNode } from "react";
import classNames from "classnames";

interface ProfileImagePreviewProps{
    imageURL: string;
}

export const ProfileImagePreview: FC<ProfileImagePreviewProps> = ({imageURL}) => {
    return (
        <div>
            <img src={imageURL} alt="Profile Image Preview" className="object-fit-contain border rounded img-fluid"/>
        </div>
    )
}