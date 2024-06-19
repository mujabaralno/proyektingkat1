"use client";

import { useTransition } from "react";
import Image from "next/image";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const DeleteConfirmation = ({onDelete}: {onDelete: any}) => {
  let [isPending, startTransition] = useTransition();
  const handleDelete = async () => {
    startTransition(() => {
      isPending = true
      onDelete()
    })
  }
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Image
          src="/assets/svg/delete.svg"
          alt="edit"
          width={20}
          height={20}
        />
      </AlertDialogTrigger>

      <AlertDialogContent className="bg-white">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure you want to delete?</AlertDialogTitle>
          <AlertDialogDescription className="p-regular-16 text-grey-600">
            This will permanently delete this Conversation
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>

          <AlertDialogAction
          
           onClick={handleDelete}
           className="flex-center p-16-semibold whitespace-nowrap  rounded-2xl bg-cover transition-all hover:bg-purple-100 hover:shadow-inner bg-white  text-red-700 w-32">
          
            {isPending ? 'Deleting...' : 'Delete'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteConfirmation;
